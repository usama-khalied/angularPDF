import { Component ,  ViewChild, ElementRef} from '@angular/core';
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content' , {static: false}) el! : ElementRef
  title = 'date-format';

//   @ViewChild('myDOMElement', { static: true })
//   MyDOMElement: ElementRef


//   download(){
// let doc = new jspdf()
// let data = document.getElementById("myDOMElement");
// this.generatePDF(data);
// }
//   generatePDF(htmlContent:any){

// html2canvas(htmlContent).then(canvas => {
// let imgWidth = 40;
// let imgheight = (canvas.height * imgWidth);
// let contentDataUrl = canvas.toDataURL('image/png');
// let pdf = new jspdf ('l', 'mm' , 'a4');
// var position = 10;
// pdf.addImage(contentDataUrl, 'PNG', 0 , position , imgWidth , imgheight)
// pdf.save('ssample.pdf');
// })

//   }

download(){
  let pdf = new jspdf('p', 'pt' , 'a4');
  pdf.html(this.el.nativeElement , {
    callback : (pdf) => {
      pdf.save("Testing.pdf")
    }
  });
}
}
