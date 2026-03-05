describe('index.html', () => { 
      it('should have a valid meta description', () => { 
         const metaDescription = document.querySelector('meta[name="description"]'); 
         expect(metaDescription).toHaveAttribute('content', 'Hanif Adedotun Portfolio Website, see my skills, the projects that I have worked on, education level, work experiences and so much more.') 
      });

      it('should have a valid og:title', () => { 
         const ogTitle = document.querySelector('meta[property="og:title"]'); 
         expect(ogTitle).toHaveAttribute('content', 'Hanif | Full Stack Developer') 
      });

      it('should have a valid twitter:site', () => { 
         const twitterSite = document.querySelector('meta[name="twitter:site"]'); 
         expect(twitterSite).toHaveAttribute('content', '@Devhanif') 
      });
   })