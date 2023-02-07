function alterarConteudo(novoConteudo) {
     document.getElementById("conteudo").innerHTML = novoConteudo;
   
     // Remove a classe "selected" de todos os links
     document.getElementById("linkA").classList.remove("selected");
     document.getElementById("linkB").classList.remove("selected");
     document.getElementById("linkC").classList.remove("selected");
   
     // Adiciona a classe "selected" ao link clicado
     switch (novoConteudo) {
       case "Conteúdo A":
         document.getElementById("linkA").classList.add("selected");
         break;
       case "Conteúdo B":
         document.getElementById("linkB").classList.add("selected");
         break;
       case "Conteúdo C":
         document.getElementById("linkC").classList.add("selected");
         break;
     }
   }
   