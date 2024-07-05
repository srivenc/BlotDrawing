const width = 125;
const height = 125;

setDocDimensions(width, height);


const tt = new bt.Turtle()
tt.up()
tt.goTo([width/8,height/2])
tt.down()
tt.right(90)
tt.arc(360,width * 3/8)

drawLines(tt.lines(),{fill: "white",stroke: "black", width: 12})

