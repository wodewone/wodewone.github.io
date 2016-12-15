(function(){
	$.fn.cocoKeyboard = function(){
		var $write,
			$inputKeyboard = $('#keyboardContainer'),
			keyWidth = 672,
			me = this,
			inputHeight = this.height() + parseInt(this.css('padding'))*2 + parseInt(this.css('borderWidth')),
			inputWidth = (parseInt(this.css('borderWidth')) * 2 + this.width() + parseInt(this.css('padding')) * 2)
		$(document).find('head').append('<style>.keyboard{list-style:none;overflow:hidden;position:absolute;background:#eee;border-radius:5px;padding:5px 0 0 8px;z-index:99}.keyboard li{float:left;margin:0 5px 5px 0;width:40px;height:40px;line-height:40px;text-align:center;background:#fff;border:1px solid #ddd;-moz-border-radius:5px;-webkit-border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.keyboard .capslock,.keyboard .tab,.keyboard .left-shift{clear:left}.keyboard .tab,.keyboard .delete{width:70px}.keyboard .capslock{width:80px}.keyboard .return{width:77px}.keyboard .left-shift{width:95px}.keyboard .right-shift{width:109px}.keyboard  .lastitem{margin-right:0}.keyboard .uppercase{text-transform:uppercase}.keyboard .space{clear:left;width:681px}.keyboard .sp-hide{display:none}.keyboard li:hover{border-color:#ddd;background:#f3f3f3;cursor:pointer}.keyboard li:active{transition:all .3s;box-shadow:0 0 3px rgba(0,0,0,0.5) inset;background:#ddd;border-color:#aaa}.keyboard li.active{box-shadow:0 0 3px rgba(0,0,0,0.5) inset;background:#ddd;border-color:#aaa}</style>')
		function bindKeyboardEvent(input){
			if(me){
				// this.attr('disabled',true).parent().css('display','inline-block');
				if($inputKeyboard){
					var shift = false,
						capslock = false;
					$inputKeyboard.find('li').off().on('click',function(e){
						e.stopPropagation();
						var $value = $write.val();
							$this = $(this),
							character = $this.find('span').length ? $this.find('span').html() : $this.html();
						if($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
							if(capslock) return false;
							$inputKeyboard.find('.capslock').removeClass('active');
							$inputKeyboard.find('.right-shift').toggleClass('active');
							$inputKeyboard.find('.left-shift').toggleClass('active');
							$inputKeyboard.find('.letter').toggleClass('uppercase');
							$inputKeyboard.find('.symbol span').toggle();

							shift = (shift === true) ? false : true;
							capslock = false;
							return false;
						}
						if($this.hasClass('capslock')) {
							$inputKeyboard.find('.capslock').toggleClass('active');
							$inputKeyboard.find('.right-shift').removeClass('active');
							$inputKeyboard.find('.left-shift').removeClass('active');
							if(shift){
								capslock = true;
								shift = false;
								return false;
							}
							$inputKeyboard.find('.letter').toggleClass('uppercase');
							$inputKeyboard.find('.symbol span').toggle();
							capslock = capslock ? false : true;
							return false;
						}
						if($this.hasClass('delete')) {
							$write.val($value.substr(0, $value.length - 1));
							return false;
						}
						if($this.hasClass('symbol')) character = $('span:visible', $this).html();
						if($this.hasClass('space')) character = ' ';
						if($this.hasClass('tab')) character = "\t";
						if($this.hasClass('return')) character = "\n";
						if($this.hasClass('uppercase')) character = character.toUpperCase();

						if(shift === true) {
							$inputKeyboard.find('.right-shift').removeClass('active');
							$inputKeyboard.find('.left-shift').removeClass('active');
							$inputKeyboard.find('.symbol span').toggle();
							if(capslock === false) $inputKeyboard.find('.letter').toggleClass('uppercase');

							shift = false;
						}
						$write.val($write.val() + character);
					});
				}
			}
		}
		
		me.off().on('click',function(e){
			e.stopPropagation();
			$write = $(this);
			$inputKeyboard = $('<ul id="keyboardContainer" style="width:'+ keyWidth +'px;display:block;" class="keyboard"><li class="symbol"><span class="off">`</span><span class="sp-hide">~</span></li><li class="symbol"><span class="off">1</span><span class="sp-hide">!</span></li><li class="symbol"><span class="off">2</span><span class="sp-hide">@</span></li><li class="symbol"><span class="off">3</span><span class="sp-hide">#</span></li><li class="symbol"><span class="off">4</span><span class="sp-hide">$</span></li><li class="symbol"><span class="off">5</span><span class="sp-hide">%</span></li><li class="symbol"><span class="off">6</span><span class="sp-hide">^</span></li><li class="symbol"><span class="off">7</span><span class="sp-hide">&amp;</span></li><li class="symbol"><span class="off">8</span><span class="sp-hide">*</span></li><li class="symbol"><span class="off">9</span><span class="sp-hide">(</span></li><li class="symbol"><span class="off">0</span><span class="sp-hide">)</span></li><li class="symbol"><span class="off">-</span><span class="sp-hide">_</span></li><li class="symbol"><span class="off">=</span><span class="sp-hide">+</span></li><li class="delete lastitem">delete</li><li class="tab">tab</li><li class="letter">q</li><li class="letter">w</li><li class="letter">e</li><li class="letter">r</li><li class="letter">t</li><li class="letter">y</li><li class="letter">u</li><li class="letter">i</li><li class="letter">o</li><li class="letter">p</li><li class="symbol"><span class="off">[</span><span class="sp-hide">{</span></li><li class="symbol"><span class="off">]</span><span class="sp-hide">}</span></li><li class="symbol lastitem"><span class="off">\\</span><span class="sp-hide">|</span></li><li class="capslock">caps lock</li><li class="letter">a</li><li class="letter">s</li><li class="letter">d</li><li class="letter">f</li><li class="letter">g</li><li class="letter">h</li><li class="letter">j</li><li class="letter">k</li><li class="letter">l</li><li class="symbol"><span class="off">;</span><span class="sp-hide">:</span></li><li class="symbol"><span class="off">\'</span><span class="sp-hide">&quot;</span></li><li class="return lastitem">return</li><li class="left-shift">shift</li><li class="letter">z</li><li class="letter">x</li><li class="letter">c</li><li class="letter">v</li><li class="letter">b</li><li class="letter">n</li><li class="letter">m</li><li class="symbol"><span class="off">,</span><span class="sp-hide">&lt;</span></li><li class="symbol"><span class="off">.</span><span class="sp-hide">&gt;</span></li><li class="symbol"><span class="off">/</span><span class="sp-hide">?</span></li><li class="right-shift lastitem">shift</li><li class="space lastitem">space</li></ul>');
			$(this).parent().append($inputKeyboard);
			bindKeyboardEvent();
			if($(this).parent().css('position') === 'static'){
				$(this).parent().css('position','relative');
			}
			$inputKeyboard.css('top', inputHeight + 5);
			if((keyWidth - inputWidth) > 0){
				$inputKeyboard.css('left', -(keyWidth - inputWidth)/2);
			}else{
				$inputKeyboard.css('left', (keyWidth - inputWidth)/2);
			}
		});

		$(document).on('click',function(){
			$('body').find('#keyboardContainer').remove();
		});

	}
})(jQuery)
