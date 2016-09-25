/* ---------------------------- begin view ----------------------------- */

var view = {

    showNumber: function(n) {
        var el = document.getElementById("showResult");
        el.innerHTML = n;
    }

};

/* ----------------------------- end view ------------------------------ */



/* ---------------------------- begin model ---------------------------- */

var model = {
    number: 0,

    calculate: function(x, y) {

        var sum = this.number = x * y;
        if (isNaN(sum)) {
            alert("Change the value and try again!");
            return null;
        }
        return this.number;
    }
};

/* ----------------------------- end model ----------------------------- */


/* -------------------------- begin controller ------------------------- */

var controller = {

    handleClick: function() {
        var firstValue = document.getElementById("firstNumber").value;
        var secondValue = document.getElementById("secondNumber").value;
        var result = model.calculate(firstValue, secondValue);
        view.showNumber(result);
    }

};

/* --------------------------- end controller -------------------------- */




/* --------------------- anonymous initialize function ----------------- */
(function() {

    var app = {

        init: function() {
            this.main();
            this.event();
        },

        main: function() {

        },

        event: function() {
            var el = document.getElementById("calcUser");
            el.onclick = controller.handleClick;
        }

    };

    app.init();

}());
/* --------------------- anonymous initialize function ----------------- */
