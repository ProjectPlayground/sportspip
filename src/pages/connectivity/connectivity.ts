import { Component, DoCheck } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Connection } from '../../pages/Connection';

/*
  Generated class for the Connectivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var chrome: any;



@Component({
    selector: 'page-connectivity',
    templateUrl: 'connectivity.html',
    providers: [Connection]
})


export class Connectivity implements DoCheck {

    servers = Connection.servers;
    isConnectivityEnabled: boolean = true;
    isLoading: boolean;

    constructor(public navCtrl: NavController,
        private connection: Connection,
        private toastCtrl: ToastController) {

    }

    ngDoCheck() {
        setTimeout(() => {
            if (this.servers.length == 0) {
                this.servers = Connection.servers;
            }
            else {
                this.isLoading = false;
            }
        }, 1000);
    }

    ionViewDidLoad() {
        console.log('Hello Connectivity Page');
        this.showLoader();
        this.connection.close();
        this.connection.scanUdp();
    }

    showLoader() {
        if (this.isConnectivityEnabled) {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 10000);
        }
    }

    refreshing: boolean = false;

    doRefresh(refresher) {
        this.refreshing = true;
        this.servers.length == 0
        setTimeout(() => {
            refresher.complete();
            this.refreshing = false;
            this.showLoader();
            this.connection.close();
            this.connection.scanUdp();
        }, 500);
    }

    connectivityChanged(isOn) {
        if (isOn) {
            this.showLoader();
            this.connection.scanUdp();
            let toast = this.toastCtrl.create({
                message: 'Connectivity is now on.',
                duration: 1500,
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present(toast);
        }
        else {
            this.servers.length == 0;
            this.isLoading = false;
            this.connection.close();
            let toast = this.toastCtrl.create({
                message: 'Connectivity closed.',
                duration: 1500,
                position: 'bottom',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present(toast);
        }
    }
    refreshConnection() {
        this.servers.length == 0
        this.connection.close();
        let toast = this.toastCtrl.create({
            message: 'Connections reloaded.',
            duration: 1500,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present(toast);
        this.showLoader();
        this.connection.scanUdp();
    }

    connect(server) {
        this.connection.connect(server);
    }

    disconnect(server) {
        this.connection.disconnect(server);
    }

    forget(server) {
        this.connection.forget(server);
    }

    getStatusColor(status) {
        if (status == "Ready to Pair") {
            return 'orange';
        }
        if (status == "Available") {
            return 'green';
        }
        if (status == "Connected") {
            return '#387ef5';
        }
        if (status == "Unavailable") {
            return 'gray';
        }
    }
}

