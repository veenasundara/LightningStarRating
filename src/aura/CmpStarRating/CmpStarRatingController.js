({
    afterScriptsLoaded: function (component, event, helper)
    {
        component.set("v.ready", true);
        helper.hlpCreateRating(component)
    },

    refresh: function (component, event, helper)
    {
        helper.hlpCreateRating(component)
    },
})