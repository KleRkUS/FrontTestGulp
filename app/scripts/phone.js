export class Phone 
{
	constructor()
	{
		this.mask = "_ (___) ___-__-__";
		this.status = false;
	}

	activation(e)
	{
		var i = 0;
		var def = this.mask.replace(/\D/g, "");
        var val = e.value.replace(/\W/g, "");
    	if (def.length >= val.length) val = def;
    	e.value = this.mask.replace(/./g, function(a) {
        	return /[_\w]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
   		});
    	if (event.type == "blur") {
        	if (e.value.length == 2) e.value = ""
    	} else this.setCursorPosition(e.value.length, e);
    	if (e.value.replace(/\W/g, "").length == 11) {
			this.setCorrectStatus(e, true);
		} else {
			this.setCorrectStatus(e, false);
		}
	}

	setCursorPosition(pos, elem)
	{
		elem.focus();
    	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    	else if (elem.createTextRange) {
        	var range = elem.createTextRange();
        	range.collapse(true);
        	range.moveEnd("character", pos);
        	range.moveStart("character", pos);
        	range.select()
    	}
    }

    /*
    * method changes input
    * when number is full and
    * correct or phone is invalid
    */
    setCorrectStatus(elem, status)
    {
    	var nums = elem.value.replace(/\D/g, "").length;
    	if (status) {
    		if (nums == 11) {
				elem.setAttribute('class', 'phone__correct');
				this.status = true;
				phoneControl.innerHTML = "&#10004;";
			} else {
				elem.setAttribute("class", "phone__invalid");
				this.status = false;
				phoneControl.innerHTML = "!";
			}
    	} else {
    		elem.removeAttribute("class");
    		this.status = false;
    	}
    }

    //return bool
    getStatus()
    {
    	return this.status;
    }
}