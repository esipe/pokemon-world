
**Découvrir en live : http://esipe.geonef.fr/pokemon-world/**

Sur ce site vous pourrez explorer le monde Pokemon comme jamais il ne vous l'a
été présenté ! Toutes les régions sont réunies sur une même carte, avec un
niveau de détail poussé au maximum pour chacune d'entre elles.

De plus, vous pouvez créer vous même votre propre carte en assemblant
les éléments souhaités grâce à votre client WMS favori tels que QGis ou
Openlayers en vous connectant au serveur : http://mapserver.esipe.geonef.fr/pokemon-world/map?


Visualiser en WMS sous QGIS
---------------------------

...ou tout autre [client WMS](http://fr.wikipedia.org/wiki/Web_Map_Service).
Procédure pour [QGIS](http://www.qgis.org/) :

 * *Couche* -> *Ajouter une couche WMS*
 * cliquer sur *Nouveau* pour ajouter ce serveur WMS :
   * Nom : *pokemon-world* (ou autre)
   * URL : *http://mapserver.esipe.geonef.fr/pokemon-world/map?*
 * cliquer *OK* puis de retour à la fenêtre précédente, cliquer en bas sur *Ajouter* puis *Fermer*
 * c'est prêt : la couche devrait apparaître sous quelques secondes, navigable évidemment. Enjoy!


Installation
------------
Le [tutoriel du cours](http://www.geonef.fr/doc/cours/mapserver-et-wms/installation-systeme)
vous guide dans la mise en place de l'environnement sur une machine virtuelle
VirtualBox, donc utilisable depuis Windows, Mac ou Linux.

La machine installée est une *Debian GNU/Linux* exploitant
*MapServer* en FastCGI derrière le serveur HTTP *Nginx*.

Il est bien-sûr possible d'utiliser d'autres environnements comme par
exemple Apache sur Windows.

Après avoir cloné localement ce dépôt Git, il faut récupérer l'archive :
http://esipe.geonef.fr/pokemon-world/extra-data.tar.bz2
et la désarchiver dans le même dossier, en faisant :
```
curl http://esipe.geonef.fr/pokemon-world/extra-data.tar.bz2 | tar xjv
```


Auteurs
-------

Projet réalisé par Julien Kazemifard <jkazemif@etudiant.univ-mlv.fr>,
étudiant IG2 de
[l'École Supérieure D'Ingénieurs de l'Université Paris-Est Marne-la-Vallée (ESIPE)](http://esipe.u-pem.fr/),
dans le cadre du cours *[Serveurs cartographiques](http://www.geonef.fr/doc/cours/mapserver-et-wms/)*.


Licence
-------

Les fichiers présents dans ce dépôt sont distribués sous les termes de
la licence CeCILL 2.1 contenue dans le fichier [LICENSE](LICENSE) et dont l'original
est disponible à l'URL http://www.cecill.info/licences/Licence_CeCILL_V2.1-fr.html
