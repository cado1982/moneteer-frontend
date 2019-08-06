import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import * as Drop from "tether-drop";

@Component({
    selector: "moneteer-dropdown",
    template: `<div #dropDownContent>
    <ng-content></ng-content>
</div>`,
    styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements AfterViewInit, OnDestroy {

    private dropDown: Drop;
    @ViewChild("dropDownContent", { static: true }) public dropDownContent: ElementRef;

    @Output() public opened: EventEmitter<void> = new EventEmitter<void>();

    @Input() public anchor: Element;
    @Input() public attachment: string = "top center";
    @Input() public targetAttachment: string = "bottom center";
    @Input() public openOn: string = "click";
    @Input() public classes: string = "drop-theme-arrows-bounce";
    @Input() public offset: string = "0 0"; // first up/down, second left/right


    constructor(private element: ElementRef) {

    }

    ngAfterViewInit(): void {
        this.dropDown = new Drop({
            target: !this.anchor ? this.element.nativeElement : this.anchor,
            content: this.dropDownContent.nativeElement,
            openOn: this.openOn,
            classes: this.classes, 
            tetherOptions: {
                attachment: this.attachment,
                targetAttachment: this.targetAttachment,
                offset: this.offset,
                optimizations: {
                    moveElement: false
                  },
                constraints: [
                    {
                        to: 'window'
                        //attachment: 'together',
                        //pin: true
                    }
                ]
            },
            //constrainToScrollParent: false,
            //constrainToWindow: false
        });
        this.dropDown.on("open", () => this.onDropdownOpen());
    }

    ngOnDestroy(): void {
        this.dropDown.off("open");
    }

    private onDropdownOpen(): void {
        this.opened.emit();
    }

    public open(): void {
        this.dropDown.open();
    }

    public close(): void {
        this.dropDown.close();
    }
}