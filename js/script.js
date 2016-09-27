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

    calculate: function(x, y, sign) {

        switch (sign) {
            case 'sum':
                var result = this.number = parseInt(x) + parseInt(y);
                break;
            case 'mult':
                result = this.number = x * y;
                break;
            case 'diff':
                result = this.number = x - y;
                break;
            case 'divide':
                result = this.number = x / y;
                break;
            default:
                result = null;
        }

        if (isNaN(result)) {
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
        switch (this) {

            case document.getElementById("calcSum"): // if (x === 'value1')
                var result = model.calculate(firstValue, secondValue, 'sum');
                break;

            case document.getElementById("calcMult"): // if (x === 'value2')
                result = model.calculate(firstValue, secondValue, 'mult');
                break;

            case document.getElementById("calcDiff"):
                result = model.calculate(firstValue, secondValue, 'diff');
                break;

            case document.getElementById("calcDivide"):
                result = model.calculate(firstValue, secondValue, 'divide');
                break;

            default:
                result = null;
        }
        // if(document.getElementById("calcSum") === this){  }
        // if(document.getElementById("calcMult") === this){  }
        // if(document.getElementById("calcDiff") === this){  }
        // if(document.getElementById("calcDivide") === this){  }

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

            var butSum = document.getElementById("calcSum");
            butSum.onclick = controller.handleClick;

            var butDiff = document.getElementById("calcDiff");
            butDiff.onclick = controller.handleClick;

            var butMult = document.getElementById("calcMult");
            butMult.onclick = controller.handleClick;

            var butDivide = document.getElementById("calcDivide");
            butDivide.onclick = controller.handleClick;

        }

    };

    app.init();

}());
/* --------------------- anonymous initialize function ----------------- */
