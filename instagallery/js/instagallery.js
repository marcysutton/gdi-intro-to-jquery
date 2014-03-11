/**
 * Instagram API Example
 * @author: Marcy Sutton
 * Version 2.0
 * 2/23/14
 **/
 
var Instagallery = function(options) {

	$('body').removeClass('no-js');
	
	var splitHash = options.access_token.split('#')[1];

	// element references
	this.loader = $('#loading');
	this.list = $('ul');
	this.listItems = this.list.find('li');
	
	// variables 
	this.accessToken = splitHash;
	this.totalImages = 0;
	this.imgWidth = 0;
	
	// initial setup	
	this.initialize();
};

Instagallery.prototype = {
	
	initialize: function() {		
		this.loader.fadeIn();
		
		this.getInstagram();
	},
	getInstagram: function(){
		var self = this;
		
		// load Instagram media.
		$.ajax({
				'dataType' : 'jsonp',
				'url' : 'https://api.instagram.com/v1/tags/girldevelopit/media/recent?'+self.accessToken+'&callback=?', 
				'success' : function(response) {
					self.totalImages = response.data.length;
					
					console.log(response);

					$.each(response.data, function(i, item){
						
						// current instgram media object
						thisObj = response.data[i]; 
						
      			var location = (thisObj.location == null) ? '' : thisObj.location.name;	
						var caption = (thisObj.caption == null) ? location : thisObj.caption.text;		      					
      			var url_thb = thisObj.images.thumbnail.url;
      			var url_low = thisObj.images.low_resolution.url;
      			var url_std = thisObj.images.standard_resolution.url;
      			var position_x = self.imgWidth * i;
		      			
						if(i == 0){
							//	images are all the same width, so we only set it once
      				self.imgWidth = thisObj.images.low_resolution.width;
						}
						
						// append list items containing image elements and position in a row
						self.list.append($('<li>').attr({'title':caption, 'class':'movable'})
									.append($('<img />').attr('src', url_low).load(function(e) 
										{
											$(e.target).show();		
											if(i == (self.totalImages - 1)) {
												self.loader.remove();
											}
										}
									))
							);			
					});
	    	},
	    	'error':function(d,msg){
	    		self.loader.remove();
	    		
	    		// instagram fail! thank you jsonp plugin for the error handling. 
	    		self.list.append('<li><h2>INSTAGRAM FAIL</h2><p>Sorry, but there seems to be a problem with the Instagram API.<br />Please try back again later.</p></li>');
	    	}
		
		});
	}
};