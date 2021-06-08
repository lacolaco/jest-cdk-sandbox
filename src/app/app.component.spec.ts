import { OverlayModule } from '@angular/cdk/overlay';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const { getByRole } = await render(AppComponent, {
      imports: [OverlayModule],
    });
    expect(getByRole('button'));
  });

  it('should show overlay', async () => {
    const { getByRole } = await render(AppComponent, {
      imports: [OverlayModule],
    });
    getByRole('button').click();
    expect(await screen.findByText('this is overlay content'));
  });
});
