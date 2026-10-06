(function() {
	tinymce.create('tinymce.plugins.SiteUrl', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceSiteUrl', function() {
				//ed.write('%SiteUrl%');
				ed.execCommand('mceInsertContent', false, '%SiteURL%');
			});

			// Register buttons
			ed.addButton('siteurl', {title : 'SiteUrl', cmd : 'mceSiteUrl', label:'%SiteURL%'});
		},

		getInfo : function() {
			return {
				longname : 'SiteUrl',
				author : '',
				authorurl : '',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('siteurl', tinymce.plugins.SiteUrl);
})();