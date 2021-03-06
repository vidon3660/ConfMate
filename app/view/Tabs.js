Ext.define('Conference.view.Tabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabs',
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:'favoritesMain'
            },
            {
                xtype:'scheduleMain'
            },
            {
                xtype:'speakersMain'
            },
            {
                xtype:'twitterMain'
            },
            {
                xtype:'aboutMain'
            }
        ]
    }
});
