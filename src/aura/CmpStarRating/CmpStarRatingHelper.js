({
    hlpCreateRating: function (component)
    {

        try
        {
            // check in case coming from afterRender,
            // before scripts are loaded
            var ready = component.get("v.ready");
            if (ready === false) {
                return;
            }

            var ratingElem = component.find("rating").getElement();

            //console.log('score = ' + component.get("v.value"));
            var readOnly = component.get("v.readOnly");
            var cancel = !readOnly;

            var selectHalf = component.get("v.selectHalf");
            var showHalf = selectHalf ? true : component.get("v.showHalf");

            $(ratingElem).raty({
                                   starType: "i",
                                   score: component.get("v.value"),
                                   halfShow: showHalf,
                                   half: selectHalf,
                                   cancel:cancel,
                                   readOnly:readOnly,
                                   cancelPlace : component.get("v.cancelPlace"),
                                   click: function(score, evt) {
                                       var scoreRound_1dec = (Math.round(score * 2) / 2).toFixed(1);
                                       component.set("v.value", scoreRound_1dec);
                                   }
                               });
        }
        catch (e)
        {
            component.error('hlpCreateRating - ' + e.message, 'sticky');
        }
    },
})