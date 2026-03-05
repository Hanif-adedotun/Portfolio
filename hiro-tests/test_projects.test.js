
      import React from 'react';
      import { render } from '@testing-library/react';
      import { applications, graphics, websites } from './portfolio';

      describe('Portfolio Data', () => {
         it('should have applications data', () => {
            expect(applications.length).toBeGreaterThan(0);
            expect(applications[0].img).not.toBeNull();
            expect(applications[0].name).not.toBeNull();
            expect(applications[0].summary).not.toBeNull();
            expect(applications[0].tools).not.toBeNull();
         });

         it('should have graphics data', () => {
            expect(graphics.length).toBeGreaterThan(0);
            expect(graphics[0][0]).not.toBeNull();
            expect(graphics[0][1]).not.toBeNull();
         });

         it('should have websites data', () => {
            expect(websites.length).toBeGreaterThan(0);
            expect(websites[0].img).not.toBeNull();
            expect(websites[0].name).not.toBeNull();
            expect(websites[0].summary).not.toBeNull();
            expect(websites[0].tools).not.toBeNull();
         });
      });
   