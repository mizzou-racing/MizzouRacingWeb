import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Dynamically add the external script for the countdown
    const script = this.renderer.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    this.renderer.appendChild(document.body, script); // Append the script to the body
  }

  ngAfterViewInit() {
    // Select the About Us card and Contact Us card using the class or id
    const aboutCard = this.el.nativeElement.querySelector('.top-card .card');
    const contactCard = this.el.nativeElement.querySelector('.second-card');

    // Create the IntersectionObserver for the "About Us" card
    const aboutObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when the card is in view
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Create the IntersectionObserver for the "Contact Us" card
    const contactObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes for the contact card
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3 // Trigger when 30% of the card is visible
    });

    // Observe the About Us and Contact Us cards
    if (aboutCard) {
      aboutObserver.observe(aboutCard);
    }

    if (contactCard) {
      contactObserver.observe(contactCard);
    }
  }
}
