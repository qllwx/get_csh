var macro;
var i, retcode, errtext;
var MyDelay;
var MyPosts;
var Province;

macro = "CODE:";
macro += "URL GOTO=http://www.csh.edu.cn/MOETC/login/loginAction!getAllSchool.action";

iimDisplay("打开国家学生体质健康网学校查询");
retcode = iimPlay(macro);

if (retcode < 0) {              
    errtext = iimGetLastError();
    alert(errtext);
}



macro="CODE:";

macro+="TAG POS=1 TYPE=DIV ATTR=CLASS:h_select_line_right&&TXT:* EXTRACT=TXT";
retcode=iimPlay(macro);
province=iimGetLastExtract(1).match(/\S+/g);
alert(province);


for (i=0;i<province.length;i++){
	macro = "CODE:";
	macro += "URL GOTO=http://localhost:3000/provinces/new";
	iimPlay(macro);
	iimDisplay(province[i]);
	iimPlay("CODE:TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/provinces ATTR=ID:province_province CONTENT= "+province[i]);
	iimPlay("CODE:TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/provinces ATTR=NAME:commit");
}

