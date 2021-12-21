<?php

namespace App\Service;

class PagesNavigator
{
    /** @var integer Number of entries / Nombre d'entrées */
    private $allEntries;

    /** @var integer Limit of entries per pages / Limite d'entrée par page */
    private $limitPerPage;

    /** @var integer Total number of pages / Nombre total de pages */
    private $totalPages;

    public function __construct($limitPerPage)
    {
        $this->limitPerPage = $limitPerPage;
    }

    /**
     * First method to execute to get all the entries to consider
     * for the pagination and the total number of pages
     *
     * Première méthode à exécuter pour récupérer toutes les entrées
     * à considérer pour la pagination et le nombre total de pages
     * 
     * @param array $allEntries
     * @return void
     */
    public function setAllEntries(array $allEntries)
    {
        $this->allEntries = count($allEntries);
        $this->totalPages = $this->getTotalPages();
    }

    /**
     * Get the number of entries
     *
     * Récupère le nomtre d'entrées
     * 
     * @return int
     */
    public function getAllEntries(): int
    {
        return $this->allEntries;
    }

    /**
     * Get the limit number of entries per page
     * 
     * Récupère le nomtre d'entrées limite par page
     * 
     * @return int
     */
    public function getLimitPerPage(): int
    {
        return $this->limitPerPage;
    }

    /**
     * Get the number of pages depending on the limitation of entries
     * per page set by the user or with the default value
     * 
     * Récupère le nombre de pages en fonction de la limite d'entrées
     * par page choisir par l'utilisateur ou avec la valeur par défaut 
     *
     * @param integer|null $userLimitPerPage Limit desired byt the user
     *              Limite désirée par l'utilisateur
     * @return integer
     */
    public function getTotalPages(int $userLimitPerPage = null): int
    {
        if (null === $userLimitPerPage) {
            $this->totalPages = round($this->allEntries/$this->limitPerPage) + 1;
        } else {
            $this->totalPages = round($this->allEntries/$userLimitPerPage) + 1;
        }

        return $this->totalPages;
    }

    /**
     * Get a specific page ID
     * 
     * Récupère un ID de page spécifique
     *
     * @param integer $id Current ID of the page to check
     * @return integer
     */
    public function getPageId(int $id): int
    {
        if ($this->totalPages <= $id) {
            dump($this->totalPages);
            $id = $this->totalPages;
        }

        if (0 == $id) {
            $id = 1;
        }

        return $id;
    }

    /**
     * Get the ID of the fifth (5th) page after actual page
     * 
     * Récupère l'ID de la cinquième (5eme) page après la page actuelle
     *
     * @param integer $id Current page ID
     * @return integer
     */
    public function getNextPage(int $id = 1): int
    {
        dump($id);

        $nextPage = $id + 5;
        if ($this->totalPages - 5 <= $id) {
            $nextPage = $this->totalPages;
        }

        return $nextPage;
    }

    /**
     * Get the ID of the fifth (5th) page before actual page
     *
     * Récupère l'ID de la cinquième (5eme) page avant la page actuelle
     * 
     * @param integer $id Current page ID
     * @return integer
     */
    public function getPreviousPage(int $id = 1): int
    {
        $previousPage = $id - 5;
        if (5 >= $id) {
            $previousPage = 1;
        }

        return $previousPage;
    }

    /**
     * Get the IDs of the pages closely available
     * 
     * Récupère les IDs des pages proches disponibles
     *
     * @param integer $id Current page ID
     * @return array
     */
    public function getMinMax(int $id = 0): array
    {
        $pages = ['pageMin' => $id - 2, 'pageMax' => $id + 2];

        if (3 > $id) {
            $pages = ['pageMin' => 1, 'pageMax' => 5];
        }
        
        if ($this->totalPages - 2 < $id) {
            $pages = ['pageMin' => $this->totalPages - 4, 'pageMax' => $this->totalPages];
        }

        if (5 > $this->totalPages) {
            $pages = ['pageMin' => 1, 'pageMax' => $this->totalPages];
        }

        return $pages;
    }

    /**
     * TODO: Améliorer non pas la méthode mais la requête associée
     * pour éviter d'avoir toujours une requête à 1000 résultats TODO:
     * Get the slice number to display specific results
     *
     * Récupère le nombre "slice", de coupe, pour afficher des résultats spécifiques
     * 
     * @param integer $id Current page ID
     * @return integer
     */
    public function getSlice(int $id = null): int
    {
        if (1 >= $id || null == $id) {
            return 0;
        }
    
        $page = $id - 1;
        $slice = $page * $this->limitPerPage;

        return $slice;
    }
}