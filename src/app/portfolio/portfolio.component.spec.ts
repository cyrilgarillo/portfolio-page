import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // HttpClient für Tests einbinden
      declarations: [PortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController); // HttpTestingController verwenden
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch technology news', () => {
    const mockResponse = {
      hits: [
        { title: 'Tech News 1', author: 'Author 1', url: 'https://example.com/1' },
        { title: 'Tech News 2', author: 'Author 2', url: 'https://example.com/2' },
      ],
    };

    component.fetchTechnologyNews();

    // Überprüfen, dass die richtige Anfrage gesendet wurde
    const req = httpTestingController.expectOne('https://hn.algolia.com/api/v1/search?query=technology');
    expect(req.request.method).toEqual('GET');

    // Antwort simulieren
    req.flush(mockResponse);

    // Überprüfen, ob die Artikel korrekt gesetzt wurden
    expect(component.articles.length).toBe(2);
    expect(component.articles[0].title).toBe('Tech News 1');
    expect(component.articles[1].title).toBe('Tech News 2');
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifizieren, dass keine ausstehenden Anfragen existieren
  });
});
