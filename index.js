/*//vensters van projecten */
//querySelectorAll() → zoek alle elementen die overeenkomen.
const knoppen = document.querySelectorAll(".project-video");
const videoSpeler = document.querySelector(".video-venster-spelen");
const modal = document.querySelector(".venster");
const modalSluiten = document.querySelector(".venster-sluiten");

/*hero*/
const heroTitel = document.querySelector(".hero-titel");
const heroTekst = document.querySelectorAll(".hero-tekst");
/*//vensters van projecten */
console.log(knoppen);
//for ( START ; VOORWAARDE ; VERANDERING )
for (let i = 0; i < knoppen.length; i++){
const knop = knoppen[i];

knop.addEventListener("click", () => {
   const dataPad = knop.dataset.video;
    videoSpeler.src = dataPad;
    modal.showModal();
    })

}
//buiten de for loop want er is maar button voor kruisje

modalSluiten.addEventListener("click", () => {
    modal.close();
    videoSpeler.pause()
});




