(function() {
	tinymce.create('tinymce.plugins.SiteOwner', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceSiteOwner', function() {
				//ed.write('%SiteOwner%');
				ed.execCommand('mceInsertContent', false, '%SiteOwner%');
			});

			// Register buttons
			ed.addButton('siteowner', {title : 'SiteOwner', cmd : 'mceSiteOwner', label:'%SiteOwner%'});
		},

		getInfo : function() {
			return {
				longname : 'SiteOwner',
				author : '',
				authorurl : '',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('siteowner', tinymce.plugins.SiteOwner);
})();