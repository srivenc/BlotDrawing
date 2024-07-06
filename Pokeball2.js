const width = 125;
const height = 125;

setDocDimensions(width, height);


const tt = new bt.Turtle()
tt.up()
tt.goTo([width/8,height/2])
tt.down()
tt.right(90)
tt.arc(360,width * 3/8)


drawLines(tt.lines(),{stroke: "black", width: 8})
const acrossT = new bt.Turtle()
// const acrossT2 = new bt.Turtle()
// acrossT2.up()
acrossT.up()
acrossT.goTo([width/8,height/2])

// acrossT2.down()
acrossT.down()
acrossT.left(17)
acrossT.arc(-18,146.6)

acrossT.left(76)
acrossT.arc(-152,13)

acrossT.left(75)
acrossT.arc(-18,75)
acrossT.up()
acrossT.goTo([width/8,height/2 - 5])
acrossT.down()
acrossT.left(37)
acrossT.arc(-18,146.6)
acrossT.left(-76)
acrossT.arc(152,13)
acrossT.left(-77)
acrossT.arc(-18,75)
acrossT.up()
acrossT.goTo([71,59])
acrossT.down()
acrossT.arc(360,8)
drawLines(acrossT.lines(),{stroke: "black", width: 2})
