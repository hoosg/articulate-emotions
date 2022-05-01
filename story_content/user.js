function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iQPj8wrIoS":
        Script1();
        break;
      case "6acbqYsW3tg":
        Script2();
        break;
      case "6JpAsh2ynVb":
        Script3();
        break;
      case "6Hyjv5nF2X4":
        Script4();
        break;
      case "61NFhIThSvq":
        Script5();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var ms = player.GetVar('Time1');
var s = ms % 1000;
ms = (ms - s) / 1000;
var secs = ms % 60;
ms = (ms - secs) / 60;
var mins = ms % 60;
player.SetVar("1_Minutes",mins);
player.SetVar("1_Seconds",secs);

var ms = player.GetVar('Time2');
var s = ms % 1000;
ms = (ms - s) / 1000;
var secs = ms % 60;
ms = (ms - secs) / 60;
var mins = ms % 60;
player.SetVar("2_Minutes",mins);
player.SetVar("2_Seconds",secs);

}

function Script2()
{
  var player = GetPlayer();
var startComparable = player.GetVar('2_Start');
var endComparable = player.GetVar('2_End');
var Time2 = endComparable - startComparable; 
player.SetVar("Time2",Time2);

}

function Script3()
{
  var player = GetPlayer();
var startComparable = player.GetVar('1_Start');
var endComparable = player.GetVar('1_End');
var Time1 = endComparable - startComparable; 
player.SetVar("Time1",Time1);

}

function Script4()
{
  var player = GetPlayer();
var startComparable = player.GetVar('1_Start');
var endComparable = player.GetVar('1_End');
var Time1 = endComparable - startComparable; 
player.SetVar("Time1",Time1);

}

function Script5()
{
  var player = GetPlayer();
var startComparable = player.GetVar('0_Start');
var endComparable = player.GetVar('0_End');
var Time0 = endComparable - startComparable; 
player.SetVar("Time0",Time0);

}

