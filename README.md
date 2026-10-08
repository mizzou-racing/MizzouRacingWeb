# Updating this website

## Sponsors

Navigate to `src/app/ev-sponsors/ev-sponsors.component.html` (replace `ev-sponsors` with `ic-sponsors` to update ic sponsor page). 

```html
<div class="sponsor-card">
    <a href="#"><img src="../../assets/sponsors/Altium.png" alt="Sponsor 1 Logo"></a>
    <h3>Sponsor 4</h3>
    <p>Funding</p>
</div>
```
Each sponsor is represented by the above block of code. 
+ To modify the logo image, edit the path inside of `src`.
+ To modify the sponsors url, edit the path inside of `href`.
+ To modify the name of the sponsor, edit the text inside of `h3`.
+ To modify the contribution of the sponsor, edit the text inside of `p`.


<br><br>
```html
<div class="small-sponsor-card">
    <img src="../../assets/sponsors/zoltek.png" alt="Sponsor 1 Logo">
</div>
```
Each smaller sponsor is represented by the above block of code.
+ To modify the logo image, edit the path inside of `src`.  

**If you would like to add a new sponsor, copy and paste the respective block of code.**
<br><br>

## EV/IC History

Navigate to the `history-list.component.ts` of which history you are editing.
Create a new item in the `cars` array formatted as so:
```ts
  {
    id: , 
    name: "", 
    year: "", 
    imgPath: "", 
    description: "", 
    extraImgs: ["","",""]
  }
```
description and extraImgs are optional fields.

<br><br>
## How to update the site with your changes.
1. **Initialize Git**  
If you haven't already initialized Git in your project, run this command to start version control in your project directory:
   ```bash
   git init
   ```
2. **Add the Remote Origin:**  
Add the repository URL as the remote origin:
   ```bash
   git remote add origin https://github.com/aidanPuricelli/mizzou-racing.git
   ```
3. **Check Git Status**  
Check the status of your repository to see which files have changed:
   ```bash
   git status
   ```
4. **Stage Your Changes**  
Add the changes to the staging area (all modified files):
   ```bash
   git add .
   ```
5. **Commit Your Changes**  
Commit your staged changes with a descriptive message:
   ```bash
   git commit -m "Describe what changes you made"
   ```
6. **Push Your Changes**  
Push the changes to the main branch of the repository:
   ```bash
   git push origin master
   ```

**Or, you can edit files directly through the Github page.**
