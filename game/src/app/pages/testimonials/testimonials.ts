import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonials {
  @ViewChild(' #testimonialSwiper')
  testimonialSwiper!: ElementRef;
  testimonials = [
    {
      name: 'Askcryptobonus',
      country: '',
      expanded: false,
      link: 'https://www.askcryptobonus.com',
      image: 'assets/home_icons/askcryptobonus.png',
      review:
        'RajPoker Affiliates is becoming a recognized name in the iGaming affiliate industry thanks to flexible commission models, crypto payment support, and access to the growing Indian gaming market. Combined with platforms like AskCryptoBonus, affiliates can find quality crypto casino promotions and improve their marketing performance.'
    },
    {
      name: 'Askslotbonus',
      country: '',
      expanded: false,
      link: 'https://askslotbonus.com',
      image: 'assets/home_icons/askslotbonus.png',
      review:
        'As the iGaming industry continues to grow, RajPoker is building a strong reputation through rewarding affiliate plans, seamless crypto payouts, and a solid presence in the expanding Indian gaming sector. In collaboration with AskSlotBonus, affiliates can access popular slot deals, exclusive casino bonuses, and crypto gaming promotions designed to increase traffic, engagement, and conversion potential.'
    },
    {
      name: 'BonusManiac',
      country: '',
      expanded: false,
      link: 'https://bonusmaniac.com',
      image: 'assets/home_icons/bonusmaniac.png',
      review:
        'As the iGaming industry continues to expand, RajPoker is strengthening its position with competitive commission structures, fast crypto-friendly payments, and strong reach within the growing Indian gaming market. Together with BonusManiac, affiliates can explore premium casino bonuses, trending gaming offers, and high-converting promotions that help drive more traffic and improve overall campaign performance.'
    },
    {
      name: 'Askcryptobonus',
      country: '',
      expanded: false,
      link: 'https://www.askcryptobonus.com',
      image: 'assets/home_icons/askcryptobonus.png',
      review:
        'RajPoker Affiliates is becoming a recognized name in the iGaming affiliate industry thanks to flexible commission models, crypto payment support, and access to the growing Indian gaming market. Combined with platforms like AskCryptoBonus, affiliates can find quality crypto casino promotions and improve their marketing performance.'
    },
    {
      name: 'Askslotbonus',
      country: '',
      expanded: false,
      link: 'https://askslotbonus.com',
      image: 'assets/home_icons/askslotbonus.png',
      review:
        'As the iGaming industry continues to grow, RajPoker is building a strong reputation through rewarding affiliate plans, seamless crypto payouts, and a solid presence in the expanding Indian gaming sector. In collaboration with AskSlotBonus, affiliates can access popular slot deals, exclusive casino bonuses, and crypto gaming promotions designed to increase traffic, engagement, and conversion potential.'
    },
    {
      name: 'BonusManiac',
      country: '',
      expanded: false,
      link: 'https://bonusmaniac.com',
      image: 'assets/home_icons/bonusmaniac.png',
      review:
        'As the iGaming industry continues to expand, RajPoker is strengthening its position with competitive commission structures, fast crypto-friendly payments, and strong reach within the growing Indian gaming market. Together with BonusManiac, affiliates can explore premium casino bonuses, trending gaming offers, and high-converting promotions that help drive more traffic and improve overall campaign performance.'
    }

  ];

  onTestimonial(item: any) {
    console.log(item)
    if (item.link) {
      // window.open(item.link, '_blank')
      window.open(item.link, '_blank');
    }
  }


  toggleReview(event: Event, item: any) {

  event.stopPropagation();

  item.expanded = !item.expanded;

}

  ngAfterViewInit() {
    this.restartSwiperAutoplay();
  }

  restartSwiperAutoplay() {

    setTimeout(() => {

      const swiperEl: any = this.testimonialSwiper?.nativeElement;

      if (swiperEl?.swiper) {

        swiperEl.swiper.autoplay.start();
        swiperEl.swiper.update();

      }

    }, 300);
  }

}
