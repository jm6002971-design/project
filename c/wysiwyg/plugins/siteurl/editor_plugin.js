(function() {
	tinymce.create('tinymce.plugins.SiteName', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceSiteName', function() {
				//ed.write('%SiteName%');
				ed.execCommand('mceInsertContent', false, '%SiteName%');
			});

			// Register buttons
			ed.addButton('sitename', {title : 'SiteName', cmd : 'mceSiteName', label:'%SiteName%'});
		},

		getInfo : function() {
			return {
				longname : 'SiteName',
				author : '',
				authorurl : '',
				infourl : '',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('sitename', tinymce.plugins.SiteName);
})();