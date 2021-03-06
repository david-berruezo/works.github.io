function HomeStoryModule(data, startRatio, useCollapse) {
    
    var _instance = Snail.extend(new Module);
    _instance.style.backgroundColor = UIColors.WHITE, _instance.onStoryClick;
    var _width = 0, _height = 0, _ratio = 0, _numOfStories = 0, _storyExpandedW = 0, _storyCollapsedW = 0, _stories = [], _currRatio = 0;

    function updateModuleSize() {
        _width = _storyExpandedW * _numOfStories, _instance.style.width = _instance.getWidth() + "px", _instance.style.height = _height + "px"
    }

    function updateStories() {
        for (var i = 0; _numOfStories > i; i++) {
            var story = _stories[i];
            story.setExpandedWidth(_storyExpandedW), story.setCollapsedWidth(_storyCollapsedW), story.setHeight(_height), story.setRatioOffset(i), useCollapse ? story.setRatio(_ratio, !0) : story.setRatioNoOffset(1, !0), TweenMax.set(story, {
                x: _storyExpandedW * i
            })
        }
    }

    function onScroll() {
        var scroll = Assets.SCROLL_CONTROLLER.currentScroll.y,
            offset = scroll,
            width = _width,
            ratio = offset / width;
        _instance.setToRatio(ratio)
    }

    function addStories() {
        var stories = ContentManager.getChildrenByAttr(data, "name", "story"),
            modelId = getLongestStoryId(stories),
            model = new TextAreaModel;
        model.maxFontSize = 18, BrowserDetect.MOBILE && (model.maxFontSize = model.minFontSize = 13), _numOfStories = stories.length;
        for (var i = 0; _numOfStories > i; i++) {
            var story = new HomeStory(stories[i], _numOfStories - i, model);
            if (story.onStoryClick = onStoryClick, modelId == i && story.setBodyModelController(), _stories.push(story), _instance.appendChild(story), story.init(), useCollapse && i == _numOfStories - 1) {
                for (var reverseStories = [], j = 0; 3 > j; j++) reverseStories.push(_stories[_numOfStories - 2 - j]);
                story.reverseStories(reverseStories)
            }
        }
    }

    function onStoryClick(storyNumber) {
        null != _instance.onStoryClick && _instance.onStoryClick(_numOfStories - storyNumber + 1)
    }

    function getLongestStoryId(stories) {
        for (var highestCount = 0, highsetId = -1, l = stories.length, i = 0; l > i; i++) {
            var bodyHtml = ContentManager.getChildByAttr(stories[i], "name", "body").innerHTML;
            bodyHtml.length > highestCount && (highestCount = bodyHtml.length, highsetId = i)
        }
        return highsetId
    }
    
    return _instance.init = function() {
        _instance.super.init(), addStories(), Assets.SCROLL_CONTROLLER.addEventListener(ScrollController.ON_SCROLL_MOVE, onScroll)
    }, _instance.resize_mobile = function(width, height) {
        return BrowserDetect.DESKTOP ? void _instance.resize_desktop(width, height) : (_storyExpandedW = width * startRatio, _storyCollapsedW = 1 * width, _height = height, updateModuleSize(), void updateStories())
    }, _instance.resize_tablet = function(width, height) {
        return BrowserDetect.DESKTOP ? void _instance.resize_desktop(width, height) : (_storyExpandedW = width * startRatio, _storyCollapsedW = .3 * width, _height = height, updateModuleSize(), void updateStories())
    }, _instance.resize_desktop = function(width, height) {
        _storyExpandedW = width * startRatio, _storyCollapsedW = .2 * width, _height = height, updateModuleSize(), updateStories(), _instance.setToRatio(_currRatio)
    }, _instance.getExpandedStoryWidth = function() {
        return _storyExpandedW
    }, _instance.getWidth = function() {
        return _width
    }, _instance.getNumOfStories = function() {
        return _numOfStories
    }, _instance.kill = function() {
        Assets.SCROLL_CONTROLLER.removeEventListener(ScrollController.ON_SCROLL_MOVE, onScroll)
    }, _instance.setToRatio = function(ratio) {
        if (useCollapse) {
            _currRatio = ratio;
            var atIndex = Math.floor(ratio * _numOfStories) - 3;
            0 > atIndex && (atIndex = 0);
            var scrollingToLast = !1,
                length = atIndex + 7;
            length > _numOfStories && (length = _numOfStories, scrollingToLast = !0);
            for (var xPos = _storyExpandedW * atIndex, i = atIndex; length > i; i++) {
                var story = _stories[i];
                story.setRatio(ratio * _numOfStories), TweenMax.set(story, {
                    x: xPos
                }), xPos += story.getWidth()
            }
        }
    }, _instance
}