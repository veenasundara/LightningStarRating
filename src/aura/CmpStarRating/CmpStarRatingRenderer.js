({
    afterRender: function(component, helper) {
        this.superAfterRender(component, helper);
        helper.hlpCreateRating(component);
    }
})