import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCmsService } from '../core/services/games_cms/game-cms.service';

@Component({
  selector: 'app-promotion',
  imports: [CommonModule],
  templateUrl: './promotion.html',
  styleUrl: './promotion.css'
})
export class Promotion {
  bannerLoaded: boolean = false;
  loading = true;
  banners: any[] = [];
  @ViewChild('contentSection') contentSection!: ElementRef;
  bannersShow: boolean = false;
  selectedIndex: any
  selectedPromotion: any;
  selectedPromotionContent: any = null;
  bannersgamecontent: any[] = [];
  constructor(private gamecms: GameCmsService) {
  }
  ngOnInit() {
    this.gamecms.promotionBanners().subscribe((images: any) => {
      if (images) {
        this.banners = images
          .filter((data: any) => data.ImageStatus === 'active')
          .map((item: any) => ({
            ...item,
            loaded: false
          }));

      };
    })

    this.gamecms.promotionGames().subscribe((games: any) => {
      if (games) {
        this.bannersgamecontent = games;
      }
    })
  };
  selectPromotion(item: any, index: any) {
    this.selectedPromotion = item;
    this.selectedPromotionContent = this.bannersgamecontent.find(
      (promo: any) => promo.name === item.promotionName
    ) || null;
    this.bannersShow = true
    this.bannerLoaded = false;
    this.selectedIndex = index;
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (this.contentSection) {
          window.scrollTo({
            top: this.contentSection.nativeElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }
  onSelectChange(event: any) {
    const index = event.target.value;
    const item = this.banners[index];
    this.selectPromotion(item, index);
  }
  closepopup() {
    this.bannersShow = false
  }
  onImageLoad(img: any) {
    img.loaded = true;
  }

}