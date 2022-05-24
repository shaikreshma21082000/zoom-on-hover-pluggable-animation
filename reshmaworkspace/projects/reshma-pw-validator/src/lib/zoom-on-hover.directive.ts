import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libZoomOnHover]'
})
export class ZoomOnHoverDirective{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter')
  mouseover(){
    this.renderer.setStyle(this.elRef.nativeElement,'transform','scale(1.2)');
    this.renderer.setStyle(this.elRef.nativeElement,'cursor','zoom-in');
  }
  @HostListener('mouseleave')
  mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement,'transform','scale(1)');
    this.renderer.setStyle(this.elRef.nativeElement,'cursor','zoom-out');
  }

}

// img:hover{
//   transform:scale(1.2);
//   cursor: zoom-in;
// }