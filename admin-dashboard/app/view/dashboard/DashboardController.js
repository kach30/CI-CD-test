Ext.define('Admin.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard',

    requires: [
        'Ext.util.TaskRunner'
    ],

    onRefreshToggle: function (tool, e, owner) {
        var store, runner;

        if (tool.toggleValue) {
            this.clearChartUpdates();
        } else {
            store = this.getStore('networkData');
            if (store.getCount()) {
                runner = this.chartTaskRunner;
                if (!runner) {
                    this.chartTaskRunner = runner = new Ext.util.TaskRunner();
                }
                runner.start({
                    run: function () {
                        // Move the first record to the end
                        var rec = store.first();
                        store.remove(rec);
                        store.add(rec);
                    },
                    interval: 200
                });
            }
        }

        // change the toggle value
        tool.toggleValue = !tool.toggleValue;
    },
    onWrenchClick: function () {
        Ext.Msg.alert('Chart', 'Settings Clicked');
    },
    onAddTodo: function () {
        var store = this.getStore('todos'),
            task = Ext.getCmp('new-task-text'),
            newTask = task.getValue();

        store.add({ task: newTask });
        task.setValue('');
    },
    clearChartUpdates: function () {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },

    destroy: function () {
        this.clearChartUpdates();
        this.callParent();
    },

    onHideView: function () {
        this.clearChartUpdates();
    }
});
