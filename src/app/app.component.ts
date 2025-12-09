import { Component, OnInit } from '@angular/core'
import { env } from 'src/environment'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.info(`Image tag: ${env.imageTag}`)
    }
}
