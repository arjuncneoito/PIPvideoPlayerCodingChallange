//
//  PlayerViewController.swift
//  pipVideo
//
//  Created by Arjun  C Ramesh on 19/03/23.
//

import Foundation
import UIKit
import AVKit

class PlayerViewController: AVPlayerViewController, AVPlayerViewControllerDelegate {
  func enablePictureInPicture() {
      if AVPictureInPictureController.isPictureInPictureSupported() {
          let pictureInPictureController = AVPictureInPictureController(playerViewController: self)
          pictureInPictureController.startPictureInPicture()
      }
  }
}
