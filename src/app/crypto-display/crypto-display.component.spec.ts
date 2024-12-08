import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CryptoDisplayComponent } from './crypto-display.component';

describe('CryptoDisplayComponent', () => {
  let component: CryptoDisplayComponent;
  let fixture: ComponentFixture<CryptoDisplayComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CryptoDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CryptoDisplayComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch crypto data', () => {
    const mockResponse = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'btc',
        current_price: 50000,
        market_cap: 900000000,
        price_change_percentage_24h: 2.5,
      },
    ];

    component.cryptoName = 'bitcoin';
    component.fetchCryptoData();

    const req = httpMock.expectOne((req) => req.url.includes('https://api.coingecko.com/api/v3/coins/markets'));
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);

    expect(component.cryptoData.name).toBe('Bitcoin');
    expect(component.cryptoData.current_price).toBe(50000);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
