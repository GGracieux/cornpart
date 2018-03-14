// Imports core
import {Component, Input} from '@angular/core';

// Imports du composant
import {LogEntry} from '../cnb-editor-log/cnb-editor-log.interface';

@Component({
    selector: 'cnb-editor-viewer',
    styleUrls: ['./cnb-editor-viewer.component.css'],
    templateUrl: './cnb-editor-viewer.component.html'
})

export class CnbEditorViewerComponent {

	// ------------ LOGS & MP3 ----------------

	@Input() logs: LogEntry[];

	@Input() b64Mp3: string;


	// --------------- PDF --------------------

	// Conteny binaire du PDF
	public binaryContent;

	// Contenu base64 du PDF
	private _b64Pdf;

	// Contenu base64 du PDF : Getter
  	get b64Pdf(): string {
    	return this._b64Pdf;
	}

	// Contenu base64 du PDF : Setter
	@Input() 
	set b64Pdf(b64Pdf: string) {
    	this._b64Pdf = b64Pdf;
    	this.loadPdf(this._b64Pdf);
	}

	// Charge le contenu du pdf a partir du contenu base64
    public loadPdf(base64pdf) {
    	this.binaryContent = this.base64ToArrayBuffer(base64pdf);
    }

    // Base64 decode
	private base64ToArrayBuffer(base64) {
	    var binary_string =  window.atob(base64);
	    var len = binary_string.length;
	    var bytes = new Uint8Array( len );
	    for (var i = 0; i < len; i++)        {
	        bytes[i] = binary_string.charCodeAt(i);
	    }
	    return bytes.buffer;
	}
	
}