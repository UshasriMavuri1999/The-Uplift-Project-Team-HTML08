function val(){
    var b = document.getElementById("password").value;
    console.log(b)
    var i=0,flag,count1=0,count2=0,count3=0;
    for(i;i<b.length;i++)
    {
        if((b[i]>='a')&&(b[i]<='z'))
        count1++;
    }
    for(i=0;i<b.length;i++)
    {
        if((b[i]>='A')&&(b[i]<='Z'))
        count3++;
    }
    for(i=0;i<b.length;i++)
    {
        if((b[i]>='0')&&(b[i]<='9'))
        count2++;
    }
    
    if((count1>=1)&&(count2>=1)&&(b.length>=6))
    flag=true;

    else 
    flag=false;

    return flag;
}

function fn(){
    var xmail = document.getElementById("email").value;
    console.log(xmail);
    if(val()==true)
    alert("Valid credentials");
    else
    alert("Invalid credentials");
};





