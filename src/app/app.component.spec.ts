import { OverlayModule } from '@angular/cdk/overlay';
import { render, screen, waitFor } from '@testing-library/angular';
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

  // This spec will be failed on jest-circus
  it('should dismiss overlay on backdrop click', async () => {
    const { getByRole } = await render(AppComponent, {
      imports: [OverlayModule],
    });
    getByRole('button').click();
    const backdrop = document.querySelector<HTMLDivElement>(
      '.cdk-overlay-backdrop'
    );
    backdrop!.click();
    await waitFor(() => {
      expect(screen.queryByText('this is overlay content')).toBeNull();
    });
  });
});
