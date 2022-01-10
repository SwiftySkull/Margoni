<?php

namespace App\Tests\Service;

use App\Service\FormatConversion;
use PHPUnit\Framework\TestCase;

class FormatConversionTest extends TestCase
{
    public function testSizeFromFormat()
    {
        $fc = new FormatConversion();

        // Pour 12F => 61 x 50 cm
        $f12 = ['height' => 61, 'width' => 50]; 

        // Pour 3P => 27 x 19 cm
        $p3 = ['height' => 27, 'width' => 19]; 

        // Pour 120M => 195 x 97 cm
        $m120 = ['height' => 195, 'width' => 97]; 

        $result1 = $fc->getSizeFromFormat('12F');
        $result2 = $fc->getSizeFromFormat('3P');
        $result3 = $fc->getSizeFromFormat('120M');

        $this->assertEquals($f12, $result1);
        $this->assertEquals($p3, $result2);
        $this->assertEquals($m120, $result3);
    }

    public function testFormatFromSizeFPM()
    {
        $fc = new FormatConversion();

        // Pour 12F => 61 x 50 cm
        $f12 = ['height' => 61, 'width' => 50]; 

        // Pour 3P => 27 x 19 cm
        $p3 = ['height' => 27, 'width' => 19]; 

        // Pour 120M => 195 x 97 cm
        $m120 = ['height' => 195, 'width' => 97]; 
        
        $result1 = $fc->getFormatFromSize($f12['height'], $f12['width']);
        $result2 = $fc->getFormatFromSize($p3['height'], $p3['width']);
        $result3 = $fc->getFormatFromSize($m120['height'], $m120['width']);
        $result4 = $fc->getFormatFromSize(22, 22);
        $result5 = $fc->getFormatFromSize(159, 951);

        $this->assertEquals('12F', $result1);
        $this->assertEquals('3P', $result2);
        $this->assertEquals('120M', $result3);
        // $this->assertEquals('Pas de correspondance', $result4);
        $this->assertFalse($result4);
        $this->assertFalse($result5);
    }

    // public function testFormatFromSizeInArray()
    // {
    //     $fc = new FormatConversion();

    //     $result1 = $fc->getFormatFromSize(12, 50);

    //     $this->assertFalse($result1);

    //     $result2 = $fc->getFormatFromSize(22, 50);

    //     $this->assertTrue($result2);

    // }
}