import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { throwError, of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('When getUsers() is called', () => {
    it('Get users', () => {
      const users = [1, 'Nombre', 'correo'];
      spyOn(component.userService, 'getUsers').and.returnValue(of({ users }));
      component.getUsers();
      expect(component.error).toBeFalsy();
      expect(component.users).toEqual({ users });
    });
  });
});
