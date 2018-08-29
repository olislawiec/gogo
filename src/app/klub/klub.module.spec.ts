import { KlubModule } from './klub.module';

describe('KlubModule', () => {
  let klubModule: KlubModule;

  beforeEach(() => {
    klubModule = new KlubModule();
  });

  it('should create an instance', () => {
    expect(klubModule).toBeTruthy();
  });
});
