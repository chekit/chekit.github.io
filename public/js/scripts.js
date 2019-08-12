var ScrollTo = /** @class */ (function () {
    function ScrollTo() {
        var _this = this;
        this.SELECTOR = '[data-scrollto]';
        this.targets = {};
        this.btnList = document.querySelectorAll(this.SELECTOR);
        if (this.btnList.length > 0) {
            setTimeout(function () { return _this.initEventListener(); }, 300);
        }
    }
    ScrollTo.prototype.initEventListener = function () {
        var _this = this;
        Array.prototype.forEach.call(this.btnList, function (item) {
            var id = item.dataset["scrollto"];
            _this.saveTargetOffset(id);
            item.addEventListener('click', function () { return _this.scrollToTarget(id); }, false);
        });
    };
    ScrollTo.prototype.saveTargetOffset = function (id) {
        this.targets[id] = document.getElementById(id).offsetTop;
    };
    ScrollTo.prototype.scrollToTarget = function (id) {
        window.scroll({
            top: this.targets[id] || 0,
            behavior: 'smooth'
        });
    };
    return ScrollTo;
}());
document.addEventListener('DOMContentLoaded', function () {
    // Init Scroll To Target Module
    new ScrollTo();
});
