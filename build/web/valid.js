function validate()
{
	var str=true;
	document.getElementById("msg").innerHTML="";
	
        if(document.signupform.firstname.value.equals(" "))
	{
            document.getElementById("msg").innerHTML="Enter";
            str=false;
	}
	
return str;
}