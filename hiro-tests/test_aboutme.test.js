import { summary, education, experiences } from './file';

describe('Portfolio Data', () => {
  it('should have a summary', () => {
    expect(summary).toBeInstanceOf(Array);
    expect(summary.length).toBe(2);
    expect(summary[0]).toBeTypeOf('string');
    expect(summary[1]).toBeTypeOf('string');
  });

  it('should have education data', () => {
    expect(education).toBeInstanceOf(Array);
    expect(education.length).toBe(2);
    expect(education[0]).toHaveProperty('ongoing');
    expect(education[0]).toHaveProperty('time');
    expect(education[0]).toHaveProperty('title');
    expect(education[0]).toHaveProperty('org');
    expect(education[1]).toHaveProperty('ongoing');
    expect(education[1]).toHaveProperty('time');
    expect(education[1]).toHaveProperty('title');
    expect(education[1]).toHaveProperty('org');
  });

  it('should have experiences data', () => {
    expect(experiences).toBeInstanceOf(Array);
    expect(experiences.length).toBe(5);
    expect(experiences[0]).toHaveProperty('time');
    expect(experiences[0]).toHaveProperty('title');
    expect(experiences[0]).toHaveProperty('org');
    expect(experiences[0]).toHaveProperty('desc');
    expect(experiences[4]).toHaveProperty('time');
    expect(experiences[4]).toHaveProperty('title');
    expect(experiences[4]).toHaveProperty('org');
    expect(experiences[4]).toHaveProperty('desc');
  });
});