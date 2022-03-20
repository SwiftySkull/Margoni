<?php

namespace App\Service;

use App\Service\FormatConversion;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class MovePictures
{
    private $slugger;
    private $directory;
    private $formatConversion;
    private $directoryAttachment;
    private $filesystem;

    public function __construct(SluggerInterface $slugger, $directory, FormatConversion $formatConversion, $directoryAttachment, Filesystem $filesystem)
    {
        $this->slugger = $slugger;
        $this->directory = $directory;
        $this->formatConversion = $formatConversion;
        $this->directoryAttachment = $directoryAttachment;
        $this->filesystem = $filesystem;
    }

    public function moveThePicture($pictureObject, $picture)
    {
        $originalPainting = pathinfo($picture->getClientOriginalName(), PATHINFO_FILENAME);
        $safePainting = $this->slugger->slug($originalPainting);
        $newPainting = $safePainting.'-'.uniqid().'.'.$picture->guessExtension();
        $paintingPath = str_replace($this->directoryAttachment, '', $this->directory.'/'.$newPainting);

        try {
            $picture->move(
                $this->directory,
                $newPainting
            );

            if (null !== $pictureObject->getPathname() && $this->filesystem->exists($pictureObject->getPathname())) {
                $this->filesystem->remove($pictureObject->getPathname());
            };
        } catch (FileException $e) {
            // ... handle exception if something happens during file upload
            // dd('oups');
        }

        $pictureObject->setTitle($originalPainting);
        $pictureObject->setPathname($paintingPath);

        $frenchOrientation = $this->formatConversion->getPictureOrientation($this->directory.'/'.$newPainting);
        $pictureObject->setOrientation($frenchOrientation ? 'V' : 'H');

        return $pictureObject;
    }
}