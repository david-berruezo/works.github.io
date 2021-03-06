function CirclesOnALine(radius, spacing, numOfCircles) {
    for (var lineGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_WITH_TEXT), lineGroupTwo = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_WITH_TEXT), xPos = 0, i = 0; numOfCircles > i; i++) {
        var line = new LineCircle;
        line.x = xPos, line.radius = radius, i % 2 ? lineGroup.addShape(line) : lineGroupTwo.addShape(line), xPos += spacing
    }
    return _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(lineGroup), _groupedCircle.addGroup(lineGroupTwo), _groupedCircle
}

function CirclesInACircle(radius, distance, numOfCircles) {
    var offsetX = distance,
        offsetY = distance,
        offSize = 30 * SiteGuides.getDesignHeightRatio(),
        lineGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_WITH_TEXT),
        line = new LineCircle;
    line.x = offsetX + offSize, line.y = offsetY + offSize, line.radius = radius - offSize, lineGroup.addShape(line);
    for (var lineGroupTwo = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_WITH_TEXT), anglePart = 360 / numOfCircles / 180 * Math.PI, i = 0; numOfCircles > i; i++) {
        var currAngle = anglePart * i,
            xPos = Math.cos(currAngle) * distance + offsetX,
            yPos = Math.sin(currAngle) * distance + offsetY,
            line = new LineCircle;
        line.x = xPos, line.y = yPos, line.radius = radius, lineGroupTwo.addShape(line)
    }
    return _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(lineGroup), _groupedCircle.addGroup(lineGroupTwo), _groupedCircle
}

function CircleInRect(radius) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerCircle = new LineRect(2 * radius, 2 * radius);
    outerGroup.addShape(outerCircle);
    var circSize = .7,
        innerCircle = new LineCircle;
    return innerCircle.x = radius * (1 - circSize), innerCircle.y = radius * (1 - circSize), innerCircle.radius = radius * circSize, innerGroup.addShape(innerCircle), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}

function CircleInCircle(radius) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerCircle = new LineCircle;
    outerCircle.radius = radius, outerGroup.addShape(outerCircle);
    var innerCircle = new LineCircle;
    return innerCircle.x = .5 * radius, innerCircle.y = .5 * radius, innerCircle.radius = .5 * radius, innerGroup.addShape(innerCircle), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}

function RectByRect(width, height) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerRect = new LineRect(width, height);
    outerGroup.addShape(outerRect);
    var innerRect = new LineRect(.5 * width, height);
    return innerRect.x = .5 * width, innerRect.y = 0, innerGroup.addShape(innerRect), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}

function RectInRect(width, height) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerRect = new LineRect(width, height);
    outerGroup.addShape(outerRect);
    var innerRect = new LineRect(.6 * width, .6 * height);
    return innerRect.x = .2 * width, innerRect.y = .2 * height, innerGroup.addShape(innerRect), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}

function DoubleTriangleInRect(width, height) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerRect = new LineRect(width, height);
    outerGroup.addShape(outerRect);
    var innerTriangle = new LineTriangleRight(.5 * width, height);
    innerGroup.addShape(innerTriangle);
    var innerTriangle = new LineTriangleRight(.5 * width, height);
    return innerTriangle.x = .5 * width, innerGroup.addShape(innerTriangle), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}

function TriangleInRect(width, height) {
    var outerGroup = new LineMaskGroup(defaultOffset, defaultThickness, defaultNextOffset, UIColors.LINES_DARK),
        innerGroup = new LineMaskGroup(defaultOffset, defaultThickness, 0, UIColors.LINES_DARK_LIGHTER),
        outerRect = new LineRect(width, height);
    outerGroup.addShape(outerRect);
    var innerTriangle = new LineTriangle(width, height);
    return innerGroup.addShape(innerTriangle), _groupedCircle = new LineMaskDrawer, _groupedCircle.addGroup(outerGroup), _groupedCircle.addGroup(innerGroup), _groupedCircle
}
var defaultOffset = 10,
    defaultNextOffset = 5,
    defaultThickness = 1;