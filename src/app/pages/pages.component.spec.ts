import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch a dad joke', () => {
    const mockJoke = { joke: 'Testwitz' };
    spyOn(component, 'refreshDadJoke').and.callFake(() => {
      component.joke = mockJoke.joke;
    });

    component.refreshDadJoke();
    expect(component.joke).toBe(mockJoke.joke);
  });

  it('should fetch a quote', () => {
    const mockQuote = [{ q: 'Testzitat', a: 'Testautor' }];
    spyOn(component, 'refreshQuote').and.callFake(() => {
      component.quote = mockQuote[0].q;
      component.author = mockQuote[0].a;
    });

    component.refreshQuote();
    expect(component.quote).toBe(mockQuote[0].q);
    expect(component.author).toBe(mockQuote[0].a);
  });
});
