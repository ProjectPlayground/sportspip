import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { sportspip } from './app.component';
import { UserActionsPopover } from '../pages/account/action/signOut'
import { HomePage } from '../pages/home/home';
import { HomeMorePopover } from '../pages/homemore-popover/homemore-popover';
import { Connectivity } from '../pages/connectivity/connectivity';
import { AccountPage } from '../pages/account/account';
import { Login } from '../pages/account/login/login';
import { Alert } from '../Services/common/alerts';
import { CollectionPage } from '../pages/collection/collection'
import { ChannelCollectionPage } from '../pages/channelcollection/channelcollection'
import { OrderBy } from '../Services/Pipe/OrderBy';
import { GroupBy } from '../Services/Pipe/GroupBy';
import { Storage } from '../Services/Factory/Storage';
import { EditorPage, EditorActionsPopover } from '../pages/editor/editor';
import { BackGroundTransferProcess } from '../Services/BackGroundTransferProcess';
import { MatrixInfoPage } from '../pages/editor/matrixinfo/matrixinfo';
import { Ipcameras } from '../pages/editor/ipcameras/ipcameras'
import { IpCamSettingsModal } from '../pages/editor/ipcamsettings-modal/ipcamsettings-modal'
import { VideoComponent } from '../pages/editor/video-component/video-component'
import { CanvasComponent } from '../pages/editor/canvas-component/canvas-component'
import { Compareview } from '../pages/editor/compareview/compareview'
import { CompareviewComponent, CaptureViewsPopover } from '../pages/editor/Compareview-Component/Compareview-Component'
import { Swipeview } from '../pages/editor/swipeview/swipeview'
import { StorageFactory } from '../Services/Factory/StorageFactory';
import { NativeStorageFactory } from '../Services/Factory/NativeStorageFactory';
import { Logger } from '../logging/logger';
import { AProvider } from '../logging/aProvider';
import { SqliteLogProvider } from '../logging/providers/sqliteLogProvider';
import { CommandDirective } from './directives/command.directive';
import { Utils } from '../Services/common/utils';
import { ModelFactory } from '../Services/Factory/ModelFactory';
import { Package } from '../Services/Package';
import { Core } from '../Services/core';
import { HttpService } from '../Services/httpService';


@NgModule({
  declarations: [
    CommandDirective,
    sportspip,
    HomePage,
    HomeMorePopover,
    Connectivity,
    AccountPage,

    UserActionsPopover,
    Login,
    CollectionPage,
    ChannelCollectionPage,
    GroupBy,
    OrderBy,

    EditorPage, EditorActionsPopover,
    MatrixInfoPage,
    Ipcameras, IpCamSettingsModal,
    VideoComponent,
    CanvasComponent,
    Compareview,
    CompareviewComponent,
    CaptureViewsPopover,
    Swipeview
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: AProvider, useClass: SqliteLogProvider },
    Alert, Logger, StorageFactory, Storage, NativeStorageFactory,
    BackGroundTransferProcess,Utils,
    ModelFactory,Package,Core,HttpService

  ],
  imports: [
    IonicModule.forRoot(sportspip)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    sportspip,
    HomePage,
    HomeMorePopover,
    Connectivity,

    EditorPage, EditorActionsPopover,
    MatrixInfoPage,
    Ipcameras, IpCamSettingsModal,
    AccountPage,
    UserActionsPopover,
    Login,
    CollectionPage,
    ChannelCollectionPage,
    Compareview,
    CompareviewComponent,
    CaptureViewsPopover,
    Swipeview
  ],
})
export class AppModule { }
