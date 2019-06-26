export class Password
{
	constructor(pass) 
	{
		this.password = pass;
		this.status = false;
	}

	activation(elem)
	{
		var value = elem.value;
		if (value == this.password || value.length >= 5) {
			this.setStatus(true);
		} else {
			this.setStatus(false);
		}
	}

	setStatus(s)
	{
		this.status = s;
	}

	// return bool
	getStatus()
	{
		return this.status;
	}
}