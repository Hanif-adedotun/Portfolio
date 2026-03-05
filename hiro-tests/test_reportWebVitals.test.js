import reportWebVitals from './reportWebVitals';

describe('reportWebVitals', () => {
  it('calls onPerfEntry with web vitals', () => {
    const onPerfEntry = jest.fn();
    reportWebVitals(onPerfEntry);
    expect(onPerfEntry).toHaveBeenCalledTimes(5);
  });

  it('does not call onPerfEntry if it is not a function', () => {
    const onPerfEntry = 'not a function';
    reportWebVitals(onPerfEntry);
    expect(reportWebVitals(onPerfEntry)).toBeUndefined();
  });

  it('handles promise rejection', async () => {
    const onPerfEntry = jest.fn();
    jest.spyOn(global, 'import').mockRejectedValue(new Error('Mocked error'));
    await expect(reportWebVitals(onPerfEntry)).rejects.not.toThrowError();
    jest.restoreAllMocks();
  });
});