import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Merge, NDData, NDSheet } from './ngx-datasheet.model';
import { ConfigService } from './core/config.service';
import { DataService } from './core/data.service';
import { CanvasService } from './core/canvas.service';
import { ScrollingService } from './core/scrolling.service';
import { SheetService, SheetServiceFactory } from './core/sheet.service';
import { RenderService } from './core/render.service';
import { ViewRangeService } from './core/view-range.service';
import { DatasheetConfig } from './models';
import { LineWrapService } from './core/line-wrap.service';
import { SelectorsService } from './core/selectors.service';
import { CellRange, CellRangeFactory } from './core/cell-range.factory';
import { Selector, SelectorFactory } from './core/selector.factory';
import { MergesService, MergesServiceFactory } from './core/merges.service';

@Component({
  selector: 'nd-ngx-datasheet',
  templateUrl: './ngx-datasheet.component.html',
  styleUrls: ['./ngx-datasheet.component.less'],
  providers: [
    ConfigService,
    DataService,
    CanvasService,
    ScrollingService,
    {
      provide: SheetService,
      useFactory: (
        configService: ConfigService,
        mergesServiceFactory: MergesServiceFactory,
      ): SheetServiceFactory => (d: NDSheet) =>
        new SheetService(d, configService, mergesServiceFactory),
      deps: [ConfigService, MergesService],
    },
    RenderService,
    {
      provide: CellRange,
      useFactory: (configService: ConfigService): CellRangeFactory => (
        sri: number,
        eri: number,
        sci: number,
        eci: number,
      ) => new CellRange(sri, eri, sci, eci, configService),
      deps: [ConfigService],
    },
    {
      provide: Selector,
      useFactory: (c: CellRangeFactory): SelectorFactory => (
        sri: number,
        eri: number,
        sci: number,
        eci: number,
      ) => new Selector(sri, eri, sci, eci, c),
      deps: [CellRange],
    },
    {
      provide: MergesService,
      useFactory: (
        cellRangeFactory: CellRangeFactory,
      ): MergesServiceFactory => (merges: Merge[]) =>
        new MergesService(merges, cellRangeFactory),
      deps: [CellRange],
    },
    ViewRangeService,
    LineWrapService,
    SelectorsService,
  ],
  host: { class: 'ngx-datasheet' },
})
export class NgxDatasheetComponent implements OnInit {
  @Input() ndConfig: DatasheetConfig = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    row: {
      height: 25,
      count: 100,
      indexHeight: 25,
    },
    col: {
      width: 100,
      count: 30,
      indexWidth: 60,
    },
  };

  @Input() ndData: NDData = {
    sheets: [
      {
        name: 'Sheet1',
        data: {
          merges: [],
          rows: {},
          rowCount: 100,
          cols: {},
          colCount: 30,
        },
        selected: true,
      },
    ],
  };

  constructor(
    private configService: ConfigService,
    private dataService: DataService,
    private el: ElementRef<HTMLElement>,
    private viewRangeService: ViewRangeService,
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.style.width = `${this.ndConfig.width}px`;
    this.el.nativeElement.style.height = `${this.ndConfig.height}px`;
    this.configService.setConfig(this.ndConfig, this.el.nativeElement);
    this.dataService.initData(this.ndData);
    this.viewRangeService.init();
  }
}