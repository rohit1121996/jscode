function Decompression(str1){
	var decString='';
	for(var i=0;i<str1.length;i++)
	{
		var curWord=str1[i];
		var count1=str1[i+1];
		while(count1>0)
		{
			decString+=str1[i];
			count1--;
		}
	}
	return decString;
}
function compression(str) {
	var comString='';
	for(var i=0;i<str.length;i++)
	{   
		var curLetter=str[i];
		var count=1;
     while(str[i+1]===curLetter)
     {
     	count++;
     	i++;
     }
     comString+=curLetter+count;
	}
	if(comString.length>str.length)
	{
		return str;
	}
		return comString;
}
var str="aaaaRRRggggHH";
var str1="a3B12c3";
console.log(compression(str));
console.log(Decompression(str1))